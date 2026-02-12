const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "../..");
const readmePath = path.join(repoRoot, "README.md");
const referencesDir = path.join(repoRoot, "swift-testing-expert", "references");

const startMarker = "<!-- references-structure:start -->";
const endMarker = "<!-- references-structure:end -->";

const readme = fs.readFileSync(readmePath, "utf8");
const startIndex = readme.indexOf(startMarker);
const endIndex = readme.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
 throw new Error("Reference structure markers not found in README.md.");
}

const existingBlock = readme.slice(startIndex + startMarker.length, endIndex);
const descriptions = new Map();

for (const line of existingBlock.split("\n")) {
 const match = line.match(/^\s+([A-Za-z0-9_-]+\.md)\s+-\s+(.*)$/);
 if (match) {
 descriptions.set(match[1], match[2].trim());
 }
}

const referenceFiles = fs
 .readdirSync(referencesDir)
 .filter((file) => file.endsWith(".md"))
 .sort((a, b) => a.localeCompare(b));

const lines = [];
lines.push("```text");
lines.push("swift-testing-expert/");
lines.push(" SKILL.md");
lines.push(" references/");

for (const file of referenceFiles) {
 const description = descriptions.get(file);
 if (description) {
 lines.push(` ${file} - ${description}`);
 } else {
 lines.push(` ${file}`);
 }
}

lines.push("```");

const newBlock = `${startMarker}\n${lines.join("\n")}\n${endMarker}`;
const updatedReadme =
 readme.slice(0, startIndex) + newBlock + readme.slice(endIndex + endMarker.length);

if (updatedReadme !== readme) {
 fs.writeFileSync(readmePath, updatedReadme);
}
