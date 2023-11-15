document.addEventListener('DOMContentLoaded', function() {
    var petsData = [
        {
            id: 1,
            name: "Milo",
            description: "A bashful yet warm-hearted dog, known for his charming quirks.",
            imageUrl: "images/pets/milo/milo.jpg"
        },
        {
            id: 2,
            name: "Cheeto (Chicken)",
            description: "A cat with an obsession with his grandpa and a knack for adventure.",
            imageUrl: "images/pets/cheeto/cheeto_cattree.jpg"
        },
        {
            id: 3,
            name: "Chief",
            description: "A 9 year old Pomeranian who loves to sleep and enjoys walking outside.",
            imageUrl: "images/pets/chief/chief.jpg"
        },
        {
            id: 4,
            name: "Riley",
            description: "A 2 year old goldendoodle, active and mischievous, loves attention.",
            imageUrl: "images/pets/riley/riley_primary.jpg"
        },
        {
            id: 5,
            name: "Sofie",
            description: "A 15-year-old Beagle mix who loves long walks and the weekends for treats.",
            imageUrl: "images/pets/sofie/sofie1.JPG"
        }
    ];

    function loadPets() {
        var petListElement = document.getElementById('pet-list');
        petListElement.innerHTML = '';

        petsData.forEach(function(pet) {
            var petCard = document.createElement('article');
            petCard.className = 'pet-card';
            petCard.setAttribute('aria-labelledby', 'pet-name-' + pet.id);

            var petImage = document.createElement('img');
            petImage.src = pet.imageUrl;
            petImage.alt = pet.name;
            petImage.className = 'pet-thumbnail';

            var petInfoDiv = document.createElement('div');
            petInfoDiv.className = 'pet-info';

            var petName = document.createElement('h3');
            petName.id = 'pet-name-' + pet.id;
            petName.textContent = pet.name;

            var petDescription = document.createElement('p');
            petDescription.className = 'pet-description';
            petDescription.textContent = pet.description;

            var detailsLink = document.createElement('a');
            detailsLink.href = 'pet-profile.html?petId=' + pet.id;
            detailsLink.className = 'pet-details-link';
            detailsLink.textContent = 'View Details';

            petInfoDiv.appendChild(petName);
            petInfoDiv.appendChild(petDescription);
            petInfoDiv.appendChild(detailsLink);

            petCard.appendChild(petImage);
            petCard.appendChild(petInfoDiv);

            petListElement.appendChild(petCard);
        });
    }

    loadPets();

    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var searchTerm = document.getElementById('search').value.toLowerCase();
        var filteredPets = petsData.filter(function(pet) {
            return pet.name.toLowerCase().includes(searchTerm) || pet.description.toLowerCase().includes(searchTerm);
        });
        displayPets(filteredPets);
    });

    function displayPets(pets) {
        var petListElement = document.getElementById('pet-list');
        petListElement.innerHTML = '';

        pets.forEach(function(pet) {
            var petCard = document.createElement('article');
            petCard.className = 'pet-card';
            petCard.setAttribute('aria-labelledby', 'pet-name-' + pet.id);

            var petImage = document.createElement('img');
            petImage.src = pet.imageUrl;
            petImage.alt = pet.name;
            petImage.className = 'pet-thumbnail';

            var petInfoDiv = document.createElement('div');
            petInfoDiv.className = 'pet-info';

            var petName = document.createElement('h3');
            petName.id = 'pet-name-' + pet.id;
            petName.textContent = pet.name;

            var petDescription = document.createElement('p');
            petDescription.className = 'pet-description';
            petDescription.textContent = pet.description;

            var detailsLink = document.createElement('a');
            detailsLink.href = 'pet-profile.html?petId=' + pet.id;
            detailsLink.className = 'pet-details-link';
            detailsLink.textContent = 'View Details';

            petInfoDiv.appendChild(petName);
            petInfoDiv.appendChild(petDescription);
            petInfoDiv.appendChild(detailsLink);

            petCard.appendChild(petImage);
            petCard.appendChild(petInfoDiv);

            petListElement.appendChild(petCard);
        });
    }
});
