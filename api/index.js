const fetch = require("node-fetch")
const db = require("../data.json")

async function getHeadOid(repositoryNameWithOwner) {
  const [owner, name] = repositoryNameWithOwner.split("/")
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
    body: JSON.stringify({
      query: `query { repository(name: "${name}", owner: "${owner}") { object(expression:"HEAD") { oid } } }`,
    }),
  })
  const json = await response.json()
  console.log(json)
  return json?.data?.repository?.object?.oid
}

async function createCommit({ repositoryNameWithOwner, branchName, headline, path, contents }) {
  const expectedHeadOid = await getHeadOid(repositoryNameWithOwner)
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
    body: JSON.stringify({
      query: "mutation ($input: CreateCommitOnBranchInput!) { createCommitOnBranch(input: $input) { commit { url } } }",
      variables: {
        input: {
          branch: { repositoryNameWithOwner, branchName },
          message: { headline },
          fileChanges: { additions: [{ path, contents: Buffer.from(JSON.stringify(contents, null, 2)).toString("base64") }] },
          expectedHeadOid,
        },
      },
    }),
  })
  const json = await response.json()
  console.log(json)
  return json
}

export default async function handler(req, res) {
  const { verso, autor, fuente } = req.body || req.query
  db.push({ verso, autor, fuente })
  const commit = await createCommit({
    repositoryNameWithOwner: "piducancore/1000",
    branchName: "main",
    headline: verso,
    path: "data.json",
    contents: db,
  })
  res.status(200).json(commit)
}
