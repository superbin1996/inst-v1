import { useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IoIosArrowUp } from 'react-icons/io'
import { Header, Loading, ProfileNoPost, UploadModal, OptionModal } from './index';
import { useAppContext } from '../context/appContext';
import { useNavigate, useParams } from 'react-router-dom'; 

export default function Profile() {
  const {
    isLoading,
    profilePosts,
    totalProfilePosts,
    getProfilePosts,
    changeImagePath,
    isFollow,
    followers,
    following,
    profileUser,
    user,
    toggleFollowCondition,
    showUploadModal,
    showOptionModal,
  } = useAppContext()
  const params = useParams()
  const navigate = useNavigate()

  const checkUser = () => {
    if (String(profileUser.profileId) === String(user.id)) {
      return true
    }
    else { return false }
  }

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    getProfilePosts(params.profileName)
  }, [params])

  if (isLoading) {
    return (
      <Loading center />
    )
  }

  if (profilePosts.length === 0) {
    return (
      <ProfileNoPost />
    )
  }

  return (
    <div className='profile-modal'>
      <Header />
      {showUploadModal && <UploadModal/>}
      {/* {showOptionModal && <OptionModal/>} */}
      <div className={'profile-cover'}>
        <div className={'profile-bar-left'}></div>

        <div className={'profile-bar-center'}>

          <header className='profile-header'>

            <label className='profile-avatar' htmlFor='avatar'>
              <img src={changeImagePath(profileUser.avatar)} alt={profileUser.avatar} />
              {checkUser() && 
              <input type="file" id='avatar' />
              }
            </label>

            <div className='profile-username'>{profileUser.username}</div>
            <div className='profile-message'>Message</div>

            {checkUser() || 
            <div className='profile-follow' onClick={()=>toggleFollowCondition(profileUser.id)}>
              {isFollow?'Following':'Follow'}
            </div>
            }

            <IoIosArrowUp className="profile-suggestion" />
            <BsThreeDots className="profile-option" />
            <div className='profile-posts'>{totalProfilePosts} Posts</div>
            <div className='profile-followers'>{followers} followers</div>
            <div className='profile-following'>{following} following</div>
            <div className='profile-info'>
              I am {profileUser.username} and I am awesome
            </div>
          </header>


          <div className={'gallery-cover'}>
            {/* LeftSide */}
            <div></div>

            {/* Center */}
            <article className={'gallery'}>
              <div className='story-cover'>
                <img className='story-icon icon' src={process.env.PUBLIC_URL + '/ahri.jpg'} alt="ahri" />
                <img className='story-icon icon' src={process.env.PUBLIC_URL + '/haku.jpg'} alt="haku" />
              </div>

              <div className={'profile-images'}>

                {profilePosts.map(post => {
                  return (
                    <div key={post.id} className='profile-images-item'>
                      <img src={changeImagePath(post.image)} alt={post.image} onClick={()=>{navigate(`/p/${post.id}`)}} />
                    </div>
                  )
                })}
              </div>


            </article>

            {/* RightSide */}
            <div></div>

          </div>
        </div>

        <div className={'profile-bar-right'}>
        </div>

      </div>
    </div>
  )

}