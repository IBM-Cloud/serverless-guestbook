/**
 * Format the Cloudant documents to be consumed by the user interface
 */
const md5 = require('spark-md5');

function main(params) {
  // params contain the "rows" coming from Cloudant including the full documents
  return {
    entries: params.rows.map((row) => { return {
      name: row.doc.name,
	    email: row.doc.email,
	    comment: row.doc.comment,
	    createdAt: row.doc.createdAt,
	    icon: (row.doc.email ? `https://secure.gravatar.com/avatar/${md5.hash(row.doc.email.trim().toLowerCase())}?s=64` : null)
    }})
	};
}
