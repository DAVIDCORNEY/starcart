import { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

const CharacterDetails = ({ details }) => {
	const [modalOpen, setModalOpen] = useState(false)
	if (details) {
		return (
			<Modal
				onOpen={() => setModalOpen(true)}
				onClose={() => setModalOpen(false)}
				open={modalOpen}
				trigger={<Button onClick={() => setModalOpen(true)}>view</Button>}
			>
				<Modal.Header>{details.name}</Modal.Header>
				<Modal.Content>
					<Modal.Description>Date of Birth: {details.birth_year}</Modal.Description>
					<Modal.Description>Height: {details.height}</Modal.Description>
					<Modal.Description>Eye Colour: {details.eye_color}</Modal.Description>
					<Modal.Description>Hair Colour: {details.hair_color}</Modal.Description>
				</Modal.Content>
			</Modal>
		)
	}
	return null
}
export default CharacterDetails
