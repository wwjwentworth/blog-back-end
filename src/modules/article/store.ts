/*
 * @Author: 吴文洁
 * @Date: 2020-03-07 20:02:36
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-09 22:12:35
 * @Description:
 */

import { observable, action} from 'mobx';
import { Article } from '@/domains/article-domain/interface';

interface ArticleStoreProps {
  currentArticle: Article,
  articleList: Article[]
}

class ArticleStore {

  @observable currentArticle = {};
  @observable articleList = [];

  @action getArticleList = () => {
    //
  }

  @action getCurrentArticle = (articleId: string) => {
    //
  }

  @action addArticle = (article: Article) => {
    // 发请求，成功之后获取当前需要展示的文章
  }

  @action deleteArticle = () => {
    //
  }
}

export default new ArticleStore();