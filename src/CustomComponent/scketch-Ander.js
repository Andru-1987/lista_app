function checkUrlToImage(url){

    let regex=/.+.[jpg|png|jpeg]$/ig
    let result=regex.test(url);

    return result;
}

export default checkUrlToImage;