// import React, { useState } from "react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { removeHyphan } from "../utils/helpers";


        function Project(props) {
            return (
        <div>
            <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
                {props.projects.map((project) => (
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <LazyLoadImage src={project.image}
                                    wideth={100} height={100}
                                    alt="Placeholder Image"
                                    />
                                    {/* <img src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" /> */}
                                </a>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left"></div>
                                <div className="media-content">
                                    <p className="name is-4" key={project.id}>
                                        {project.name}
                                    </p>
                                </div>
                            </div>

                            <div className="content hast-text-left">
                                {project.description}
                                <br />
                                <br />
                                <div className="content is-family-code">
                                    Languages: {project.languages}
                                    <br />
                                    NPM packages: {project.packages}
                                </div>
                                <div className="card">
                                    <footer className="card-footer">
                                        <a
                                            href={project.repo}
                                            className="card-footer-item"
                                            target="_blank" rel="noreferrer"
                                        >
                                            See the Repo!
                                        </a>
                                        <br />
                                        <a
                                            href={project.link}
                                            className="card-footer-item"
                                            target="_blank" rel="noreferrer"
                                        >
                                            See the Live Site!
                                        </a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;