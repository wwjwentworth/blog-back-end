/*
 * @Author: 吴文洁
 * @Date: 2020-03-07 20:02:36
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-08 10:40:22
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

  @action getCurrentArticle = () => {
    //
  }

  @action addArticle = (article: Article) => {
    this.articleList.push(article)
  }
}

export default new ArticleStore();