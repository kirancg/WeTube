import React from 'react'
import { Tooltip,Icon } from 'antd'

function LikesDislikes() {
    return (
        <div>
            <React.Fragment>
                <span key="comment-basic-like">
                    <Tooltip title="Like">
                        <Icon type="like"
                            theme
                            // LikeAction === 'liked' ? 'filled' : 'outlined'
                            onClick
                        />
                    </Tooltip>
                    <span style={{paddingLeft:'8px',cursor:'auto'}}></span>
                </span>
            </React.Fragment>
        </div>
    )
}

export default LikesDislikes
