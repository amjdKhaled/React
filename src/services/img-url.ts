const getCroppedImageUrl = (url:string) =>{
    const targer ='menia/';
    const index = url.indexOf(targer) + targer.length;
    url.slice(0,index) + 'crop/600/400' + url.slice(index);
}

export default getCroppedImageUrl;