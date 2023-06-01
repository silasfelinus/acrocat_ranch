<template>
  <div>
    <button @click="createWildcard">Create Wildcard</button>
    <button @click="deleteWildcard">Delete Wildcard</button>
    <button @click="viewWildcard">View Wildcard</button>
    <button @click="editWildcard">Edit Wildcard</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { fetch } = queryContent('wildcards')

const createWildcard = async () => {
  // Logic to create a new wildcard file
}

const deleteWildcard = async () => {
  // Logic to delete a wildcard file
}

const viewWildcard = async () => {
  // Logic to view a wildcard file
}

const editWildcard = async () => {
  // Logic to edit a wildcard file
}
</script>
