import React from "react";

function Repositories(repos) {
    console.log(repos);

    return (
        <div>
            {repos.repos.map((repo) => (
                <div className="listRepos" key={repo.id}>
                    <h3>{repo.name} <a href={repo.svn_url}>Link</a></h3>
                </div>
            ))}
        </div>
    );
}

export default Repositories;
