import React from 'react';
import SearchBar from './SearchBar';
import youtube, {baseParams} from '../api/youtube'; //used destructuring for the params
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
   state = {videos: [], selectedVideo: null}

   componentDidMount() {
       this.handleFormSubmit('cars')
   }

    handleFormSubmit = async term => {  
        const response = await youtube.get('/search', {
            params: {
                ...baseParams,   //used of spread operator to provide the params 
                q: term
        }
    })
        this.setState(
            {
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            
            });
   };
// handleFormSubmit = term => {  
//this also solve the problem but i might need it in another component 
//     axios.get('https://www.googleapis.com/youtube/v3/search', {
//         params: {
//             part: 'snippet',
//             maxResult: 5,
//             key: 'AIzaSyCd99YLCG3JGeB_q27v_jYuvYEa81IF9sY',
//             q: term
//         }
        
//     });
// };
   
onVideoSelect = video => {
    this.setState({selectedVideo: video});
}


    render() {
        return (
            <div className='ui container'>
                <SearchBar onSubmital={this.handleFormSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos}
                                
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;