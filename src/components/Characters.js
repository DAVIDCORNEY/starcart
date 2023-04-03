import {useState} from 'react';
import { Button, Card, Loader, Message, Pagination } from 'semantic-ui-react'
import { useGetCharactersQuery } from '../services/swapApi'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addFave } from '../features/faves'
import CharacterDetails from './CharacterDetails'

const Characters = () => {
	const [activePage, setActivePage] = useState(1);
	const { data, isError, isLoading } = useGetCharactersQuery(activePage);
	const dispatch = useDispatch()

	const selectCharacter = e => {
		const { title } = e.currentTarget.dataset
		const character = data.results.find(character => character.name === title)
		return character
	}
	const addToFavourites = e => dispatch(addFave(selectCharacter(e)))

	const onChange = (e,pageInfo) => {
		setActivePage(pageInfo.activePage);
	}

	if (isLoading) {
		return <Loader active={isLoading} />
	}
	if (isError) {
		return <Message error={isError}>There was an error</Message>
	}
	if (data && Boolean(data?.results?.length)) {
		const numberOfPages = Math.floor(data.count/10);
		return (
			<>
				<Card.Group centered>
					{data.results.map(character => (
						<Card key={nanoid()}>
							<Card.Content>
								<Card.Header>{character.name}</Card.Header>
							</Card.Content>
							<Card.Content extra>
								<CharacterDetails details={character} />
								<Button
									icon={{ name: 'plus', size: 'small' }}
									data-title={character.name}
									positive
									content="Add to faves"
									onClick={addToFavourites}
								/>
							</Card.Content>
						</Card>
					))}
				</Card.Group>
				<div class="ui container center aligned">
					<Pagination
						defaultActivePage={1}
						boundaryRange={0}
						firstItem={null}
						lastItem={null}
						totalPages={numberOfPages}
						ellipsisItem={null}
						onPageChange={onChange}
					/>
				</div>
			</>
		)
	} else if (data?.results?.length === 0) {
		return <Message warning>no films found</Message>
	}
	return null
}
export default Characters

