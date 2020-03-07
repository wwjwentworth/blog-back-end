/*
 * @Author: 吴文洁
 * @Date: 2020-03-07 20:02:36
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-07 20:25:23
 * @Description:
 */

import { observable, action} from 'mobx';

interface Article {
  title?: string,
}

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
}

export default new ArticleStore();