/*
 * @Author: 吴文洁
 * @Date: 2020-03-07 20:02:36
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-08 19:15:26
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
    this.currentArticle = article;
    this.articleList.push(article)
  }

  @action deleteArticle = () => {
    if (this.currentArticle.id) {
      // 物理删除
    } else {
      // 逻辑删除
      this.articleList.splice(0, 1);
    }
  }
}

export default new ArticleStore();