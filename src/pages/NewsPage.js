import React, { useContext } from 'react'
import { Form } from '../components/Form'
import { NewsContainer } from '../components/NewsContainer'
import { PageHeader } from '../components/PageHeader'
import { ToolBar } from '../components/ToolBar'
import { NewsContext } from '../context/News/NewsContext'
import { Loader } from '../components/Loader'

export const NewsPage = () => {
	const { loading } = useContext(NewsContext)
	return (
		<>
			{loading ? <Loader /> : null}
			<ToolBar />
			<PageHeader />
			<Form />
			<NewsContainer />
		</>
	)
}
