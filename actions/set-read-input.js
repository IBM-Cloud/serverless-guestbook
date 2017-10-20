/**
 * Ensures the next call to *list-documents* in the sequence will include the actual documents
 */
function main(params) {
	return {
		params: {
	  	include_docs: true
		}
	};
}
