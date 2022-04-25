import React, { useEffect } from 'react';
import './App.css';
import { PostContainer } from './components/PostContainer';
// import { fetchUsers } from './store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from './hooks';

const App = (): JSX.Element => {
    // const dispatch = useAppDispatch();
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer);
    //
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, []);

    return (
    <div className="App">
        {/*{isLoading && <h2>Loading...</h2>}*/}
        {/*{JSON.stringify(users, null, 2)}*/}
        {/*{error && <h2>{error}</h2>}*/}

        <PostContainer/>
    </div>
    );
}

export default App;
