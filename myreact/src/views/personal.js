import React,{Component} from 'react'
import '../css/personal.css'
import RecommendList from '../complate/recommendList'
import CollectList from '../complate/collectList'
import HotList from '../complate/hotList'//,Route,Switch
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
//import 'whatwg-fetch'
/*<CollectList></CollectList>
 <RecommendList></RecommendList>
 <HotList></HotList>*/
class personal extends Component {
    render() {
        return (
            <Router>
                <div className='personal'>
                            <ul>
                                <li>
                                    <Link to='/loading'>
                                        <img src={require('../images/personal/leftArrive.png')} alt=""/>
                                    </Link>
                                    &nbsp;
                                    <Link to='/personal/'>
                                        个人收藏
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/personal/reCommend'>
                                        官方推荐
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/personal/hotOrder/'>
                                        热度排行
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <Switch>
                                    <Route path='/personal/' exact component={CollectList}></Route>
                                    <Route path='/personal/reCommend' component={RecommendList}></Route>
                                    <Route path='/personal/hotOrder' component={HotList}></Route>
                                </Switch>
                            </div>
                </div>
            </Router>

        );
    }
}
export default personal;