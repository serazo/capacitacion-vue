<template>
  <table class="table table-vcenter">
    <thead>
      <tr>
        <th class="text-center" style="width: 50px;">#</th>
        <th>Name</th>
        <th class="d-none d-sm-table-cell" style="width: 15%;"> Access </th>
        <th class="text-center" style="width: 100px;">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-center" scope="row">1</th>
        <td class="fw-semibold fs-sm"><a href="javascript:void(0)">Adam McCoy</a></td>
        <td class="d-none d-sm-table-cell"><span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span></td>
        <td class="text-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-alt-secondary"><i class="fa fa-fw fa-pencil-alt"></i></button><button type="button" class="btn btn-sm btn-alt-secondary"><i class="fa fa-fw fa-times"></i></button></div></td></tr><tr><th class="text-center" scope="row">2</th><td class="fw-semibold fs-sm"><a href="javascript:void(0)">Betty Kelley</a></td><td class="d-none d-sm-table-cell"><span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">Business</span></td><td class="text-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-alt-secondary"><i class="fa fa-fw fa-pencil-alt"></i></button><button type="button" class="btn btn-sm btn-alt-secondary"><i class="fa fa-fw fa-times"></i></button></div></td></tr><tr><th class="text-center" scope="row">3</th><td class="fw-semibold fs-sm"><a href="javascript:void(0)">Jesse Fisher</a></td><td class="d-none d-sm-table-cell"><span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">Business</span></td><td class="text-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-alt-secondary"><i class="fa fa-fw fa-pencil-alt"></i></button><button type="button" class="btn btn-sm btn-alt-secondary"><i class="fa fa-fw fa-times"></i></button></div></td></tr><tr><th class="text-center" scope="row">4</th><td class="fw-semibold fs-sm"><a href="javascript:void(0)">Ryan Flores</a></td><td class="d-none d-sm-table-cell"><span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">Trial</span></td><td class="text-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-alt-secondary"><i class="fa fa-fw fa-pencil-alt"></i></button><button type="button" class="btn btn-sm btn-alt-secondary"><i class="fa fa-fw fa-times"></i></button></div></td></tr><tr><th class="text-center" scope="row">5</th><td class="fw-semibold fs-sm"><a href="javascript:void(0)">Alice Moore</a></td><td class="d-none d-sm-table-cell"><span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span></td><td class="text-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-alt-secondary"><i class="fa fa-fw fa-pencil-alt"></i></button><button type="button" class="btn btn-sm btn-alt-secondary"><i class="fa fa-fw fa-times"></i></button></div></td></tr><tr><th class="text-center" scope="row">6</th><td class="fw-semibold fs-sm"><a href="javascript:void(0)">Scott Young</a></td><td class="d-none d-sm-table-cell"><span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span></td><td class="text-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-alt-secondary"><i class="fa fa-fw fa-pencil-alt"></i></button><button type="button" class="btn btn-sm btn-alt-secondary"><i class="fa fa-fw fa-times"></i></button></div></td></tr></tbody></table>
  <button class="btn btn-primary" @click="refrescar()"> Refrescar </button>
  <button class="btn btn-danger" @click="clear()"> Eliminar </button>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const establecimientos = computed( () => store.state.establecimientos );
const user = computed ( () => store.state.user);

if(!establecimientos.value){
  refrescar()
}

function refrescar(){
  store.dispatch('getEstablecimientos');
}

function clear(){
  store.commit('clearEstablecimientos');
}

</script>