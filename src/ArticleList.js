import React, {Component} from 'react'
import Article from './article'

export default function ArticleList({articles}) {
	const articlesElem = articles.map((articles) => <li key = {articles.id} ><Article article = { articles } /></li>)
	return (
			<ul>
				{articlesElem}
			</ul>
		)
}