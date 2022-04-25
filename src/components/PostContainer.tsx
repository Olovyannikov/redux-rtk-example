import { useEffect, useState } from 'react';
import { IPost } from '../models/IPost';
import { postApi } from '../services/Post.service';
import {PostItem} from '../components/PostItem';

export const PostContainer = () => {
    const [limit, setLimit] = useState(200);
    const {data: posts, error, isLoading, refetch} = postApi.useFetchAllPostsQuery(limit);
    const [createPost, {}] = postApi.useCreatePostMutation();
    const [updatePost, {}] = postApi.useUpdatePostMutation();
    const [deletePost, {}] = postApi.useDeletePostMutation();

    useEffect(() => {
    }, []);

    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost);
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post);
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    return (
        <div>
            <button onClick={handleCreate}>Add new Post</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            <ul className="post__list">
                {posts && posts.map(post =>
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
                )}
            </ul>
        </div>
    )
}