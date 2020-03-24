profileData = {
    officialName: 'moshiko.n',
    nickName: '@NMoshiko',
    numOfTweet: 1,
    profileImgUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
    coverImgUrl: 'https://pbs.twimg.com/profile_banners/43470348/1580217978/600x200',
    dateOfCreation: 'Joined June 2019',
    numOfFollowing: 11,
    numOfFollowers: 13,
};

function onProfileClick() {
    let notificationContainer = document.getElementsByClassName('notification-container');
    notificationContainer[0].hidden = true;
    let name = document.querySelector('.name-n-tweet .name');
    name.innerHTML = profileData.officialName;

    let numOfTweet = document.querySelector('.name-n-tweet .tweets');
    numOfTweet.innerHTML = profileData.numOfTweet;

    let cover = document.querySelector('.profile-page .cover');
    cover.src = profileData.coverImgUrl;

    let profile = document.querySelector('.profile-page .profile');
    profile.src = profileData.profileImgUrl;

    let officialName = document.querySelector('.profile-context-container .official-name');
    officialName.innerHTML = profileData.officialName;

    let nickName = document.querySelector('.profile-context-container .nick-name');
    nickName.innerHTML = profileData.nickName;

    let date = document.querySelector('.profile-context-container .date');
    date.innerHTML = profileData.dateOfCreation;

    let following = document.querySelector('.profile-context-container .following');
    following.innerHTML = profileData.numOfFollowing;

    let followers = document.querySelector('.profile-context-container .followers');
    followers.innerHTML = profileData.numOfFollowers;

    let profilePage = document.getElementsByClassName('profile-page');
    profilePage[0].hidden = false;
}

function onHomeClick() {
    let profilePage = document.getElementsByClassName('profile-page');
    profilePage[0].hidden = true;
    let notificationContainer = document.getElementsByClassName('notification-container');
    notificationContainer[0].hidden = false;
}

