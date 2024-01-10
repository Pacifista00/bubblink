<template>
        <div class="container container-login">
        <div class="card card-login p-5 my-bg-light">
            <form>
                <h3 class="text-center mb-3">Register</h3>
                <div class="mb-3">
                    <div class="my-input mb-3">
                        <input type="text" class="my-form-control bg-transparent" id="fullname" name="fullname" placeholder="fullname">
                    </div>
                    <div class="my-input mb-3">
                        <input type="text" class="my-form-control bg-transparent" id="username" name="username" placeholder="username">
                    </div>
                    <div class="my-input mb-3">
                        <input type="password" class="my-form-control bg-transparent" id="password" name="password" placeholder="password">
                    </div>
                    <div class="my-input mb-3">
                        <input type="password" class="my-form-control bg-transparent" id="passwordconfirm" name="passwordconfirm" placeholder="confirm password">
                    </div>
                </div>
                <button type="submit" class="btn my-btn text-light my-2">REGISTER</button>
                <p>Already have an account? <a href="" class="text-link">Login</a></p>
            </form>
        </div>
    </div>
</template>