import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, Grid, IconButton, Link, TextField, Typography } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import Posts from 'ui-component/cards/Post';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'store';
import { getPosts, editComment, addComment, addReply, likePost, likeComment, likeReply } from 'store/slices/user';

// assets
import AttachmentTwoToneIcon from '@mui/icons-material/AttachmentTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import RecentActorsTwoToneIcon from '@mui/icons-material/RecentActorsTwoTone';
import Profile1  from 'views/application/users/account-profile/Profile1';

// ==============================|| SOCIAL PROFILE - POST ||============================== //

const Profile = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [posts, setPosts] = React.useState([]);
    const userState = useSelector((state) => state.user);
    const getPost = async () => {
        dispatch(getPosts());
    };

    React.useEffect(() => {
        setPosts(userState.posts);
    }, [userState]);

    React.useEffect(() => {
        getPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const editPost = async (id, commentId) => {
        dispatch(editComment(id, commentId));
    };

    const commentAdd = async (id, comment) => {
        dispatch(addComment(id, comment));
    };

    const replyAdd = async (postId, commentId, reply) => {
        dispatch(addReply(postId, commentId, reply));
    };

    const handlePostLikes = async (postId) => {
        dispatch(likePost(postId));
    };

    const handleCommentLikes = async (postId, commentId) => {
        dispatch(likeComment(postId, commentId));
    };

    const handleReplayLikes = async (postId, commentId, replayId) => {
        dispatch(likeReply(postId, commentId, replayId));
    };

    const sideAvatarSX = {
        borderRadius: '8px',
        width: 48,
        height: 48,
        fontSize: '1.5rem',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: theme.palette.mode === 'dark' ? '1px solid' : 'none',
        '&>svg': {
            width: 24,
            height: 24
        }
    };

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12} md={4}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <MainCard>
                        {/* <Profile1 />                   */}
                        
                        
                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={8}>
                <Grid container spacing={gridSpacing}>
                  
                    {posts &&
                        posts.map((post) => (
                            <Grid key={post.id} item xs={12}>
                                <Posts
                                    key={post.id}
                                    post={post}
                                    editPost={editPost}
                                    renderPost={getPost}
                                    setPosts={setPosts}
                                    commentAdd={commentAdd}
                                    replyAdd={replyAdd}
                                    handlePostLikes={handlePostLikes}
                                    handleCommentLikes={handleCommentLikes}
                                    handleReplayLikes={handleReplayLikes}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Grid> */}
        </Grid>
    );
};

export default Profile;
