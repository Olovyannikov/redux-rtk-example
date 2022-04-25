import {MouseEvent} from 'react';
import { IPost } from '../models/IPost';

export interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

export const PostItem = ({post, remove, update}: PostItemProps): JSX.Element => {
    const handleRemove = (e: MouseEvent) => {
        e.stopPropagation();
        remove(post);
    }

    const handleUpdate = (e: MouseEvent) => {
        e.stopPropagation();
        const title = prompt() || "";
        update({ ...post, title });
    }

    return (
        <li className="post" onClick={handleUpdate}>
            {post.id}. {post.title}
            <button onClick={handleRemove}>Удалить</button>
        </li>
    );
};