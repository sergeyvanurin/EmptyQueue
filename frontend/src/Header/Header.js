import './header.css'
import React from 'react';
export default function Header() {
    return (<header>
        <h1><a href="/">Arend monster</a></h1>
        <nav>
            <a href="/card">card</a>
            <a href="/search">search</a>
            <a href="https://yandex.ru">yandex</a>
        </nav>
    </header>
    );
}