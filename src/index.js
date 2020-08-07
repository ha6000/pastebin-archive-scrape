const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const archiveURL = 'https://pastebin.com/archive';

async function getPastebinArchives() {
	const html = (await axios.get(archiveURL)).data;
	// const html = fs.readFileSync(path.join(__dirname, '../res/archive.html'));
	const $ = cheerio.load(html);
	return $( '.maintable tr:has(td)' ).map((index, element) => {
		const tr = $( element );
		const td = tr.find('td');
		const a = $(td[0]).find('a')
		const name = a.text();
		const id = a.attr('href').slice(1);
		const created = $(td[1]).text();
		const lang = $(td[2]).find('a').text();
		return {name, created, lang, id};
	}).get();
}

module.exports.getPastebinArchives = getPastebinArchives;