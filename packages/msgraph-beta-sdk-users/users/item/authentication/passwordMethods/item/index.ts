/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPasswordAuthenticationMethodFromDiscriminatorValue, type PasswordAuthenticationMethod } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the passwordMethods property of the microsoft.graph.authentication entity.
 */
export interface PasswordAuthenticationMethodItemRequestBuilder extends BaseRequestBuilder<PasswordAuthenticationMethodItemRequestBuilder> {
    /**
     * Retrieve the properties and relationships of a password authentication method object. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PasswordAuthenticationMethod
     * @see {@link https://learn.microsoft.com/graph/api/passwordauthenticationmethod-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<PasswordAuthenticationMethodItemRequestBuilderGetQueryParameters> | undefined) : Promise<PasswordAuthenticationMethod | undefined>;
    /**
     * Retrieve the properties and relationships of a password authentication method object. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PasswordAuthenticationMethodItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of a password authentication method object. 
 */
export interface PasswordAuthenticationMethodItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PasswordAuthenticationMethodItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PasswordAuthenticationMethodItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPasswordAuthenticationMethodFromDiscriminatorValue,
        queryParametersMapper: PasswordAuthenticationMethodItemRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const PasswordAuthenticationMethodItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/authentication/passwordMethods/{passwordAuthenticationMethod%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */