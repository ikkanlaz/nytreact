import React from "react";

const Results = props => {
    console.log(props.articleList);
    const articleItems = props.articleList.map(article => {
        return (
            <li className="list-group-item" key={article._id}>
                <h4 className="list-group-item-heading">
                    <a href={article.web_url}>{article.headline.main}</a>
                    <small>{article.pub_date}</small>
                    </h4>
                <p className="list-group-item-text">{article.snippet}</p>
                <button data-headline={article.headline.main} data-url={article.web_url} data-date={article.pub_date} type="button" className="btn btn-default btn-sm">
                    <span className="glyphicon glyphicon-pushpin" aria-hidden="true"></span>
                </button>
            </li>
        );
    });

    return (
        <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-default ">
                <div className="panel-heading">
                    <h3 className="panel-title">Results</h3>
                </div>
                <ul className="list-group">
                    {articleItems}
                </ul>
            </div>
        </div>
    );
};

export default Results;