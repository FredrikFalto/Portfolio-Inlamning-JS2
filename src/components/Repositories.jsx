import React from "react";

function Repositories(repos) {
    console.log(repos);

    return (
        <div>
            <ul>
                {repos.repos.map((repo) => (
                    <li key={repo.id}>
                        <a target={"_blank"} href={repo.svn_url}>{repo.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Repositories;
