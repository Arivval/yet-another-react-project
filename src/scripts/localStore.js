const stateKey = 'takeHomeProjectReduxStore';

export const loadFromStore = () => {
    try {
        const stateString = localStorage.getItem(stateKey);
        if (stateString) {
            return JSON.parse(stateString);
        }
        return undefined;
    } catch (e) {
        console.log('Unable to load from localStore!');
        return undefined;
    }
}

export const writeToStore = (stateObj) => {
    try {
        const stateString = JSON.stringify(stateObj);
        if (stateString) {
            localStorage.setItem(stateKey, stateString);
            return true;
        }
        return false;
    } catch (e) {
        console.log('Unable to write to localStore!');
        return false;
    }
}

export const clearStore = () => {
    try {
        localStorage.removeItem(stateKey);
    } catch (e) {
        console.log('Unable to clear localStore!');
        return false;
    }
}

export const setMockState = () => {
    const mockStateObj = {
        "comments":{
           "OEV6SLsVarjJjAnPNioab":{
              "userID":"johnyilin",
              "comment":"Hello from Champaign!",
              "postTime":1601935900885,
              "liked":true,
              "likeCount":42,
              "replies":{
                 "hO4Fgu7XzquT9T0mx6O4a":{
                    "userID":"foo_bar_baz",
                    "commentID":"OEV6SLsVarjJjAnPNioab",
                    "comment":"@johnyilin Nice to meet you! 👋",
                    "postTime":1601936160087,
                    "liked":false,
                    "likeCount":1
                 }
              }
           },
           "QZJHuZzrWOn7WyQpFV4TR":{
              "userID":"instagram_user",
              "comment":"fantastic image!",
              "postTime":1601936150580,
              "liked":false,
              "likeCount":0,
              "replies":{
                 
              }
           }
        },
        "textAreaState":{
           "commentID":null,
           "atString":null
        }
     };
    localStorage.setItem(stateKey, JSON.stringify(mockStateObj));
}