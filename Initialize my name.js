function initializeNames(name){
    let nameParts = name.split(' ')
    for (let i = 1; i < nameParts.length - 1; i++) {
        nameParts[i] = nameParts[i].charAt(0) + '.';  // Shorten middle names to initials
    }

    return nameParts.join(' ');
}
