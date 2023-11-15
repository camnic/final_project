document.addEventListener('DOMContentLoaded', function() {
    var petsData = {
        "1": {
            name: "Milo",
            description: "A bashful yet warm-hearted dog, known for his charming quirks.",
            imageUrl: "images/pets/milo/milo_xmas.jpg",
            age: "8 years",
            breed: "Maltese",
            gender: "Male"
        },
        "2": {
            name: "Cheeto (Chicken)",
            description: "A cat with an obsession with his grandpa and a knack for adventure.",
            imageUrl: "images/pets/cheeto/cheeto_boxes.jpg",
            age: "5 years",
            breed: "Domestic Shorthair",
            gender: "Male"
        },
        "3": {
            name: "Chief",
            description: "A 9 year old Pomeranian who loves to sleep and enjoys walking outside.",
            imageUrl: "images/pets/chief/chief_sleeping.jpg",
            age: "9 years",
            breed: "Pomeranian",
            gender: "Male"
        },
        "4": {
            name: "Riley",
            description: "A 2 year old goldendoodle, active and mischievous, loves attention.",
            imageUrl: "images/pets/riley/riley_sleeping.jpg",
            age: "2 years",
            breed: "Goldendoodle",
            gender: "Female"
        },
        "5": {
            name: "Sofie",
            description: "A 15-year-old Beagle mix who loves long walks and the weekends for treats.",
            imageUrl: "images/pets/sofie/sofie5.jpg",
            age: "15 years",
            breed: "Beagle Mix",
            gender: "Female"
        }
    };

    function getPetDetailsById(petId) {
        return petsData[petId];
    }

    function loadPetProfile() {
        var urlParams = new URLSearchParams(window.location.search);
        var petId = urlParams.get('petId');

        var petDetails = getPetDetailsById(petId);
        if (petDetails) {
            document.getElementById('pet-image').src = petDetails.imageUrl;
            document.getElementById('pet-image').alt = `Image of ${petDetails.name}`;
            document.getElementById('pet-name').textContent = petDetails.name;
            document.getElementById('pet-description').textContent = petDetails.description;
            document.getElementById('pet-age').textContent = `Age: ${petDetails.age}`;
            document.getElementById('pet-breed').textContent = `Breed: ${petDetails.breed}`;
            document.getElementById('pet-gender').textContent = `Gender: ${petDetails.gender}`;
        } else {
            document.getElementById('pet-profile').textContent = 'Pet details not found.';
        }
    }

    loadPetProfile();
});
