import { categories } from './data/categories';
import { articles } from './data/articles';
import { comments } from './data/comments';

/**
 * 获取所有分类
 */
export async function getCategories() {
  return {
    code: 0,
    data: {
      categories,
    },
  };
}

/**
 * 获取分类和排序获取文章列表
 * @param {*} category 文章分类 id
 * @param {*} sortBy 文章列表排序 'hot' 代表热门， 'new' 代表最新
 * @param {*} offset 分页参数参考 sql 的 offset 和 limit
 * @param {*} limit 同上
 */
export async function getArticles(categoryId = 0, sortBy = 'hot', offset = 0, limit = 10) {
  const sortFunc = {
    new: (a, b) => b.article_info.ctime - a.article_info.ctime,
    hot: (a, b) => b.article_info.digg_count - a.article_info.digg_count,
  }[sortBy];

  const articlesWithCategory = categoryId ?
    articles.filter(
      a => a.category_info.first_category_id === categoryId || a.category_info.second_category_id === categoryId
    ) :
    articles;

  if (sortFunc) {
    articlesWithCategory.sort(sortFunc);
  }

  return {
    code: 0,
    data: {
      articles: articlesWithCategory.slice(offset).slice(0, limit),
    },
    total: articlesWithCategory.length,
    has_more: offset + limit < articlesWithCategory.length,
  };
}

/**
 * 根据文章 ID 获取文章
 * @param {*} articleId 文章 ID
 */
export async function getArticleById(articleId) {
  const article = articles.find(a => a.article_id === articleId);
  if (article) {
    return {
      code: 0,
      data: { article },
    };
  }
  return {
    code: 404,
    error_message: '找不到文章',
  };
}

/**
 * 根据文章 ID 获取文章评论
 * @param {*} articleId 文章 ID
 * @param {*} offset 分页参数参考 sql 的 offset 和 limit
 * @param {*} limit 同上
 */
export async function getCommentsByArticleId(articleId, offset = 0, limit = 10) {
  return {
    code: 0,
    data: {
      article_id: articleId,
      comments: comments.slice(offset).slice(0, limit),
    },
    total: comments.length,
    has_more: offset + limit < comments.length,
  };
}
