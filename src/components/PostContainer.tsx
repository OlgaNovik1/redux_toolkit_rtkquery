
import React, { useEffect, useState } from 'react'
import { postAPI } from '../services/UserServices'
import PostItem from './PostItem'
import { IPost } from '../models/IPost';

const PostContainer = () => {
    const [limit, setLimit] = useState(100);
    const { data: posts, isLoading, isError } = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, { error, isLoading: iscreateloading }] = postAPI.useCreatePostMutation()
    const [updatePost, { }] = postAPI.useUpdatePostMutation()
    const [deletePost, { }] = postAPI.useDeletePostMutation()


    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(3)
    //     }, 2000)
    // }, [])

    const handleClick = async () => {
        const title = prompt()
        await createPost({ title, body: title } as IPost)

    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div className='post_list'>
                <button onClick={() => handleClick()}>Add new post</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {isError && <h1>Произошла ошибка загрузки постов...</h1>}
                {posts && posts.map(post =>
                    <PostItem post={post} remove={() => deletePost(post)} update={handleUpdate} key={post.id} />
                )}
            </div>
        </div>
    )
}

export default PostContainer