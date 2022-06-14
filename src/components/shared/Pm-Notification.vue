<template>
    <div class="container">
        <div class="columns">
            <div class="column is-5 is-offset-4">
                <div class="notification" :class="{'is-danger' : NotificationType === 'danger', 'is-success': NotificationType === 'success' }">
                    <slot name="body">
                        Algo Anduvo Mal
                    </slot>
                </div>
            </div>
        </div>   
    </div>
    
</template>

<script>

export default{
    props:{
        NotificationType : {
            type : String,
            required : true,
        }

    },

}
</script>

<style scoped>
.notification{
    margin: 10px;
}

</style>