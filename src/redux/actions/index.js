import * as artistAction from '../reducers/artistReducer';
import * as albumAction from '../reducers/albumReducer';
import * as playlistAction from '../reducers/playlistReducer';
import * as siteAction from '../reducers/siteReducer';



const action = {
    artist: artistAction,
    album: albumAction,
    playlist: playlistAction,
    site: siteAction
}

export { action };