import React from 'react'


export default () => (
    <nav
        className={
            "" +
            "page-bg d-flex align-items-center" +
            " justify-content-between" +
            " pl-5 main-nav mb-4 border-bottom shadow"
        }
    >
        <ul className={"ul"}>
            <li>
                <h1 className={"text-info"}>React Bookstore</h1>
            </li>
            <li>
                <a className={"text-secondary"} href="">
                    BOOKS
                </a>
            </li>
            <li>
                <a className={"text-secondary"} href="">
                    GATEGORIES{" "}
                </a>
            </li>
        </ul>

        <div className={"pr-5"}>
          <span className={"text-info shadow-sm border p-3 rounded-circle"}>
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
        </div>
    </nav>
)