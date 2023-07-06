
import React, { useEffect, useState } from 'react'
import { postAPI } from '../services/UserServices'
import PostItem from './PostItem'

const PostContainer = () => {
    const [limit, setLimit] = useState(10);
    const { data: posts, isLoading, isError } = postAPI.useFetchAllPostsQuery(limit)

    useEffect(() => {
        setTimeout(() => {
            setLimit(3)
        }, 2000)
    }, [])

    return (
        <div>
            <div className='post_list'>
                {isLoading && <h1>Идет загрузка...</h1>}
                {isError && <h1>Произошла ошибка загрузки постов...</h1>}
                {posts && posts.map(post =>
                    <PostItem post={post} key={post.id} />
                )}
            </div>
        </div>
    )
}

export default PostContainer