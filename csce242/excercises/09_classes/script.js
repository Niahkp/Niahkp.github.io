class Dog{
    constructor(title, breed, color, age, size, pic){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("dog");
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        //create my columns
        const columnsDiv = document.createElement("div");
        columnsDiv.classList.add("columns");
        section.append(columnsDiv);
        const firstColumn = document.createElement("div");
        columnsDiv.append(firstColumn);
        const secondColumn = document.createElement("div");
        columnsDiv.append(secondColumn);

        //create image and add to first column
        firstColumn.append(this.picture(this.pic));

        //create info data and add to second column
        secondColumn.append(this.paragraph("Breed", this.breed));
        secondColumn.append(this.paragraph("Age", this.age));

        const expCon = document.createElement("a");
        expCon.href="#";
        expCon.innerHTML = "&#x2964;";
        h3.append(expCon);

        expCon.onClick = () => {
            secondColumn.classList.toggle("hidden");
        };
        return section;
    }

    picture(info){
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    paragraph(title, info){
        const p =document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

const dogs = [];
//const myDog = new Dog("molly", "pit", "brown", 4, "xs", "images/molly.jpg")
dogs.push(new Dog("coco", "morkie", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("sam", "golden", "yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("gerald", "pit", "white", 3, "lg", "pit-bull.jpg"));





dogs.forEach((dog) =>{
    document.getElementById("dog-list").append(dog.item);
});