import fs from "fs"
import path, { dirname } from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "posts")

export const getSortedPostsData = () => {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, "")

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    return allPostData.sort((a, b) => {
        if(a.date < b.date){
            return 1
        } else {
            return -1
        }
    })
}