<template>
    <div class="container container-login">
        <div class="card card-login p-5 my-bg-light">
            <div class="logo mx-auto mb-3">
                <img src="../../public/img/logo.png" alt="" style="width:150px;">
            </div>
            <form>
                <h3 class="text-center">Login</h3>
                <div class="mb-3">
                    <div class="my-input mb-3">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" class="my-form-control bg-transparent" id="username" name="username" placeholder="username">
                    </div>
                    <div class="my-input mb-3">
                        <i class="fa-solid fa-key"></i>
                        <input type="password" class="my-form-control bg-transparent" id="password" name="password" placeholder="password">
                    </div>
                </div>
                <button type="submit" class="btn my-btn text-light my-2">LOGIN</button>
                <p>Don't have an account? <a href="" class="text-link">Register</a></p>
            </form>
        </div>
    </div>
</template>

