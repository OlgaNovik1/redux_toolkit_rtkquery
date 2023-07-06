
import React from 'react'
import { postAPI } from '../services/UserServices'
import PostItem from './PostItem'

const PostContainer2 = () => {
    const { data: posts, isLoading, isError, refetch } = postAPI.useFetchAllPostsQuery(100)

    return (
        <div>
            <div className='post_list'>
                <button onClick={() => refetch()}>REFETCH</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {isError && <h1>Произошла ошибка загрузки постов...</h1>}
                {/* {posts && posts.map(post =>
                    <PostItem post={post} key={post.id} />
                )} */}
            </div>
        </div>
    )
}

export default PostContainer2