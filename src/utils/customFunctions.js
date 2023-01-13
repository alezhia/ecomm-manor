export const showItems = (categoryParam, subCategoryParam, items) => {
    if (categoryParam === undefined) {
        return items
    } else if (subCategoryParam === undefined) {
        return items.filter((item) => slugIt(item.categoria) === categoryParam)
    } else {
        return items.filter(
            (item) =>
                slugIt(item.categoria) === categoryParam &&
                slugIt(item.subCategoria) === subCategoryParam
        )
    }
}

export const slugIt = (text) => text.toLowerCase().replace(" ", "-")
