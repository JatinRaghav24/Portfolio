const handledownload = ()=>{
    const link = document.createElement('a');
    link.href = '../public/jatin_res.pdf'
    link.download= 'jatin_res.pdf'
    link.click();
}
export default handledownload;