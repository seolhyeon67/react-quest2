function footer () {
    let a=['법적고지','이메일무단수집거부','이용약관','개인정보취급방침','고객센터','입찰공고'];
    let b=[];
    for (let i=0;i<6;i++) {
        b.push(<p className="footer">{a[i]}</p>);
        if (i<5) b.push(<p className="footer">|</p>);
    }
    return (
        <div className="footer">
            {b}
        </div>
    )
}

export default footer;