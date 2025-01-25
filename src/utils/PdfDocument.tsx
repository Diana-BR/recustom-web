import { FC } from 'react';
import { Page, Text, View, Document} from '@react-pdf/renderer'

const PdfDocument: FC<any> = ({name, email, role}) => (
	<Document>
		<Page size="A4">
			<View >
				<Text>Nombre de Usuario: {name}</Text>
			</View>
			<View >
				<Text>E-mail: {email}</Text>
			</View>
			<View >
				<Text>Role: {role}</Text>
			</View>
			<View >
			<Text>Usuario sin faltas...</Text>
			</View>
		</Page>
	</Document>
);

export default PdfDocument;