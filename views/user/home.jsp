
<sec:authentication var="principal" property="principal" />

<c:if test="${response != null && response.success == false}">
    <div class="notification_failed">
        ${response.message}
    </div>
</c:if>

<c:if test="${response != null && response.success == true}">
    <div class="notification_success">
        ${response.message}
    </div>
</c:if>


<h1>Hello ${principal.username}</h1>        
<a href="${pageContext.request.contextPath}/user/userprofile">profile</a>